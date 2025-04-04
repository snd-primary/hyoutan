/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "astro"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended",
		"prettier", // Prettierと競合する可能性のあるルールを無効化
	],
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				// Astro固有のルールを追加できます
			},
		},
	],
	rules: {
		// プロジェクト固有のESLintルールを追加できます
		"no-unused-vars": "warn", // 未使用変数を警告として扱う例
	},
};
