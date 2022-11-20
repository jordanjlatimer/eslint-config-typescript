module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [ "@typescript-eslint" ],
	"extends": [ 
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/strict"
	],
  "rules": {
		"@typescript-eslint/no-confusing-void-expression": ["error", {ignoreArrowShorthand: true}],
		"@typescript-eslint/no-explicit-any": ["error", {fixToUnknown: true}],
		"@typescript-eslint/no-redundant-type-constituents": "error",
		"@typescript-eslint/parameter-properties": "error",
		// ESLint base rule overrides
		"default-param-last": "off",
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
		"no-extra-parens": "off",
		"@typescript-eslint/no-extra-parens": "warn",
		"no-invalid-this": "off",
		"@typescript-eslint/no-invalid-this": "error",
		"no-loop-func": "off",
		"@typescript-eslint/no-loop-func": "error",
		"no-unused-expressions": "off",
		"@typescript-eslint/no-unused-expressions": [ "error", { allowShortCircuit: true, allowTernary: true } ],
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": "error",
		"quotes": "off",
		"@typescript-eslint/quotes": "warn",
		"semi": "off",
		"@typescript-eslint/semi": "warn",
  }
}