const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}

const castSnakeCaseToPascalCase = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}

module.exports = {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase};
