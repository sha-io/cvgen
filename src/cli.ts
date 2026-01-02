import { Command } from "commander";
import { generateCV } from "./actions/generate-cv.js";
import { generateBoilerplate } from "./actions/generate-template.js";

// CLI setup
const program = new Command()

program
    .name('jobpare-cv')
    .description('Generate beautiful CVs from JSON data and HTML templates')
    .version('1.0.0');

program
    .command("create-template")
    .description("Generate a new JSON template with path to schema for autocompletion")
    .argument("[output-file]", "Path for output file")
    .action(generateBoilerplate)

program
    .description('Generate a CV from JSON data and template')
    .command("generate")
    .requiredOption('-t, --template <path>', 'Path to HTML template file')
    .requiredOption('-i, --input <path>', 'Path to JSON input file')
    .option('-o, --output <path>', 'Path for output file (PDF or HTML)')
    .option('--html-only', 'Generate HTML file only (skip PDF generation)')
    .option('--validate-only', 'Only validate JSON data without generating output')
    .action(generateCV);

export { program }