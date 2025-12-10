module.exports = {
  default: {
    import: [
      'worlds/world.ts',
      'hooks/index.ts',
      'step_definitions/**/*.ts'
    ],
    paths: ['features/**/*.feature'],
    format: ['progress', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
};
