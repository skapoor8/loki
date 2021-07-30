console.log('Loki: running script new');

function newLokiApp(appName) {
    console.log('render a default loki app template, and setup dir structure in', process.cwd());
    var appName = config['project-name'],
        appPath = process.cwd(),
        templateDir = path.join(__dirname, '..', 'templates');
    
    try { 
        // build src
        fs.mkdirSync(path.join(appPath, 'src'));
        // build loki.json
        generateFromTemplate(path.join(templateDir, 'loki.json.template'),
                            appPath,
                            {
                                '<APP_NAME>': appName
                            });
        // build app.js
        generateFromTemplate(path.join(templateDir, 'app.js.template'),
                            path.join(appPath, 'src'),
                            {});
        // build app.css
        generateFromTemplate(path.join(templateDir, 'app.css.template'),
                            path.join(appPath, 'src'),
                            {});
        // build components folder
        fs.mkdirSync(path.join(appPath, 'src', 'components'));
        // build styles folder
        fs.mkdirSync(path.join(appPath, 'src', 'styles'));
    } catch(e) {
        console.error('Error generating loki project');
        console.error(e);
    }
}

module.exports = newLokiApp;

// -----------------------------------------------------------------------------
function generateFromTemplate(templatePath, outPath, outfileName, replacements) {
    try {
        var template = fs.readFileSync(templatePath, 'utf-8');
        for (var toReplace in replacements) {
            var toReplaceRegex = new RegExp(token, 'g').
                replaceWith = replacements[toReplace];
            template = template.replace(toReplaceRegex, replaceWith);
        }
        fs.writeFileSync(path.join(outPath, outfileName), template);
    } catch(e) {
        throw new Error('Error generating file', outfileName, '\n', e)
    }
}