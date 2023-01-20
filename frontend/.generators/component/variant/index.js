var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What should be the component name?',
      },
      {
        type: 'input',
        name: 'folder',
        message: 'What should be the component folder?',
      },
    ]);
  }

  writing() {
    const capName =
      this.answers.name.charAt(0).toUpperCase() + this.answers.name.slice(1);
    const lowerName = this.answers.name.toLowerCase();
    this.fs.copyTpl(
      this.templatePath('BaseVariantTemplate.tsx'),

      this.destinationPath(
        'components/' + this.answers.folder + '/' + capName + '.tsx'
      ),
      { capName: capName, lowerName: lowerName }
    );

    this.fs.copyTpl(
      this.templatePath('BaseVariantTemplate.stories.tsx'),
      this.destinationPath(
        'components/' + this.answers.folder + '/' + capName + '.stories.tsx'
      ),
      { capName: capName, lowerName: lowerName }
    );

    this.fs.copyTpl(
      this.templatePath('BaseVariantTemplate.mocks.ts'),
      this.destinationPath(
        'components/' + this.answers.folder + '/' + capName + '.mocks.ts'
      ),
      { capName: capName, lowerName: lowerName }
    );
  }
};
