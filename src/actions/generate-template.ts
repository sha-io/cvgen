import fs from 'fs-extra';
import path from 'path';
import chalk from "chalk";
import type { CVProfile } from "../validation/schema.types";
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const schema = pathToFileURL(path.resolve(__dirname, '../validation/cv-schema.json')).href;

const boilerplate: CVProfile = {
    "$schema": schema,
    "profile": {
        "name": "",
        "email": "",
        "phone": "",
        "position": "",
        "location": ""
    },
    "summary": "",
    "experiences": [
        {
            "company": "",
            "position": "",
            "location": "",
            "start_date": "",
            "end_date": "",
            "description": ""
        }
    ],
    "education": [
        {
            "institution": "",
            "degree": "",
            "field_of_study": "",
            "start_date": "",
            "end_date": ""
        }
    ],
    "skills": {
        "Programming": [],
        "Tools": [],
        "[Any custom field]": []
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
        process.exit(1)
    }
}