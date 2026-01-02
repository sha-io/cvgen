import chalk from "chalk";
import { generate as generator, type options } from "../generator.js";

export async function generateCV(options: options) {
    try {
        await generator(options);
    } catch (error) {
        console.error(chalk.red(`❌ Error: ${(error as Error).message}`));
        process.exit(1);
    }
}