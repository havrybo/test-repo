module.exports = {
  default: {
    import: [
      'main.ts',
      'hooks/index.ts',
      'step_definitions/**/*.ts'
    ],
    paths: ['features/**/*.feature'],
    format: ['progress', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
};
