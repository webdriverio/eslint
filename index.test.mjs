import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import wdioEslint, { config } from './dist/index.js'

const resolveEffectiveRules = (configs) => {
    const merged = {}
    for (const entry of configs) {
        if (entry.rules && !entry.files) {
            Object.assign(merged, entry.rules)
        }
    }
    return merged
}

describe('@wdio/eslint config', () => {
    it('enables stylistic customize rules while preserving WebdriverIO overrides', () => {
        const rules = resolveEffectiveRules(wdioEslint.config())
        assert.ok(rules['@stylistic/comma-dangle'], 'expected @stylistic/comma-dangle from customize preset to be enabled')
        assert.deepEqual(rules['@stylistic/indent'], ['error', 4, { SwitchCase: 0 }])
        assert.deepEqual(rules['@stylistic/quotes'], ['error', 'single', { avoidEscape: true }])
        assert.deepEqual(rules['@stylistic/semi'], ['error', 'never'])
    })

    it('allows consumer configs to override base rules', () => {
        const rules = resolveEffectiveRules(config({
            rules: {
                '@stylistic/semi': ['error', 'always'],
            },
        }))
        assert.deepEqual(rules['@stylistic/semi'], ['error', 'always'])
    })
})
