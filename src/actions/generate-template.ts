import fs from 'fs-extra';
import path from 'path';
import chalk from "chalk";
import type { CVProfileAutoComplete } from "../validation/schema.types";
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const schema = pathToFileURL(path.resolve(__dirname, '../validation/cv-schema.json')).href;
const boilerplate: CVProfileAutoComplete = {
    $schema: schema,
    profile: {
        name: "",
        email: "",
        phone: "",
        position: ""
    },
    summary: "",
    education: [
        {
            institution: "",
            degree: "",
            field_of_study: "",
            end_date: "",
        }
    ],
    skills: {
    }
}


export function generateBoilerplate(destination: string = 'resume.json'): void {
    const absolutePath = path.resolve(process.cwd(), destination);

    // Check if file already exists
    if (fs.existsSync(absolutePath)) {
        console.error(`Error: File already exists at ${absolutePath}`);
        return;
    }

    try {
        const data = JSON.stringify(boilerplate, null, 2);
        fs.writeFileSync(absolutePath, data, 'utf-8');
        console.log(chalk.green(`✅ Success! Created a new template file at: ${absolutePath}`));
        console.log(chalk.blue(`💡 Tip: Open this file in VS Code or any code editor for autocompletion.`));
    } catch (err) {
        console.log(chalk.red('Failed to generate a new template file:'), err);
    }
}