/**
 * Date in YYYY-MM-DD or MM/YYYY format. (e.g., "2023-01-01")
 * @asString
 * @type string
 * @pattern ^(\d{4}-\d{2}-\d{2}|(0[1-9]|1[0-2])\/(19|20)\d{2})$
 * @example "2023-01-01"
 */
type DateString = string;

export interface ProfileDetails {
    /** Full legal name. (e.g., "John Doe") @type string @minLength 1 @errorMessage { "minLength": "Name cannot be empty" } @example "John Doe" */
    name: string;
    /** Current professional title. (e.g., "Software Engineer") @type string @minLength 1 @errorMessage { "minLength": "Position is required" } @example "Software Engineer" */
    position: string;
    /** Primary contact email address. (e.g., "john.doe@example.com") @type string @format email @errorMessage { "format": "Invalid email format" } @example "john.doe@example.com" */
    email: string;
    /** Contact phone number. (e.g., "+1-234-567-890") @type string @minLength 1 @errorMessage { "minLength": "Phone number is required" } @example "+1-234-567-890" */
    phone: string;
    /** Professional seniority level. (e.g., "Senior") @nullable @example "Senior" */
    seniority_level?: string;
    /** Current geographic location. (e.g., "London, UK") @nullable @example "London, UK" */
    location?: string;
    /** URL to LinkedIn profile. (e.g., "https://linkedin.com/in/johndoe") @type string @format uri @errorMessage { "format": "LinkedIn must be a valid URL" } @nullable @example "https://linkedin.com/in/johndoe" */
    linkedin?: string;
    /** URL to GitHub profile. (e.g., "https://github.com/johndoe") @type string @format uri @errorMessage { "format": "GitHub must be a valid URL" } @nullable @example "https://github.com/johndoe" */
    github?: string;
    /** URL to personal portfolio or website. (e.g., "https://johndoe.com") @type string @format uri @errorMessage { "format": "Website must be a valid URL" } @nullable @example "https://johndoe.com" */
    website?: string;
}

export interface Experience {
    /** Name of the organization. (e.g., "Tech Solutions Inc.") @type string @minLength 1 @example "Tech Solutions Inc." */
    company: string;
    /** Job title held at the organization. (e.g., "Frontend Developer") @type string @minLength 1 @example "Frontend Developer" */
    position: string;
    /** Work location (e.g., "Remote" or "City, State"). @type string @minLength 1 @nullable @example "Remote" */
    location?: string;
    /** Employment start date. (e.g., "2020-01-01") @type string @example "2020-01-01" */
    start_date: DateString;
    /** Employment end date or 'Present'. (e.g., "Present")
     * @type string
     * @pattern ^(\d{4}-\d{2}-\d{2}|(0[1-9]|1[0-2])/(19|20)\d{2}|[Pp][Rr][Ee][Ss][Ee][Nn][Tt])$
     * @errorMessage { "pattern": "End date must be in YYYY-MM-DD, MM/YYYY, or 'Present'" } 
     * @nullable
     * @example "Present"
     */
    end_date?: string;
    /** Overview of roles and responsibilities. (e.g., "Developed scalable web applications...") @type string @minLength 1 @nullable @example "Developed and maintained scalable web applications using React." */
    description?: string;
    /** List of key contributions. (e.g., ["Reduced load times by 40%"]) @type array @minItems 1 @errorMessage { "minItems": "Please list at least one achievement" } @nullable @example ["Reduced load times by 40%", "Led a team of 3 developers"] */
    achievements?: string[];
}

export interface Education {
    /** Name of the school or university. (e.g., "University of Technology") @type string @minLength 1 @example "University of Technology" */
    institution: string;
    /** Degree or qualification obtained. (e.g., "Bachelor of Science") @type string @minLength 1 @example "Bachelor of Science" */
    degree: string;
    /** Specific area of study. (e.g., "Computer Science") @type string @minLength 1 @example "Computer Science" */
    field_of_study: string;
    /** Graduation date. (e.g., "2018-06-01") @type string @example "2018-06-01" */
    end_date: DateString;
    /** Campus or city of the institution. (e.g., "New York, USA") @type string @minLength 1 @nullable @example "New York, USA" */
    location?: string;
    /** Enrollment start date. (e.g., "2014-09-01") @type string @nullable @example "2014-09-01" */
    start_date?: DateString;
    /** Grade Point Average. (e.g., "3.8/4.0") @type string @nullable @example "3.8/4.0" */
    gpa?: string;
    /** Academic honors or activities. (e.g., ["Dean's List 2017"]) @type array @minItems 1 @errorMessage { "minItems": "Please list at least one achievement" } @nullable @example ["Dean's List 2017", "Hackathon Winner"] */
    achievements?: string[];
}

export interface Skills {
    /** Categorized list of skills. (e.g., {"Languages": ["TypeScript"]}) @type object @additionalProperties { "type": "array", "items": { "type": "string", "minLength": 1 } } @example { "Languages": ["TypeScript", "Python"], "Tools": ["Git", "Docker"] } */
    [category: string]: string[];
}

export interface Project {
    /** Title of the project. (e.g., "E-commerce Platform") @type string @minLength 1 @example "E-commerce Platform" */
    name: string;
    /** High-level summary of the project. (e.g., "A full-stack online store...") @type string @minLength 1 @example "A full-stack online store built with Next.js and Stripe." */
    description: string;
    /** Programming languages and tools used. (e.g., ["React", "Node.js"]) @type array @minItems 1 @example ["React", "Node.js", "PostgreSQL"] */
    technologies: string[];
    /** Link to source code. (e.g., "https://github.com/user/repo") @type string @format uri @nullable @example "https://github.com/johndoe/shop" */
    github_url?: string;
    /** Link to live application. (e.g., "https://demo.com") @type string @format uri @nullable @example "https://shop-demo.com" */
    live_url?: string;
}

export interface Certification {
    /** Official name of the certification. (e.g., "AWS Certified Solutions Architect") @type string @minLength 1 @example "AWS Certified Solutions Architect" */
    name: string;
    /** Organization that issued the certificate. (e.g., "Amazon Web Services") @type string @minLength 1 @example "Amazon Web Services" */
    issuer: string;
    /** Date the certificate was earned. (e.g., "2022-05-15") @type string @example "2022-05-15" */
    date: DateString;
    /** Date the certificate expires. (e.g., "2025-05-15") @type string @nullable @example "2025-05-15" */
    expiry_date?: DateString;
}

export type LanguageProficiency = 'Native' | 'Fluent' | 'Intermediate' | 'Basic';

export interface Language {
    /** Name of the language. (e.g., "English") @type string @errorMessage { "required": "Language name is required" } @example "English" */
    language: string;
    /** Level of mastery. (e.g., "Native") @type string @errorMessage { "required": "Proficiency level is required" } @example "Native" */
    proficiency: LanguageProficiency;
}

export interface CVProfile {
    /** Path to the JSON schema for validation. (e.g., "./schema.json") @type string @example "./schema.json" */
    $schema?: string;
    /** Personal and contact information. @type object @errorMessage { "required": "Profile information is required" } */
    profile: ProfileDetails;
    /** Professional summary or objective statement. (e.g., "Motivated engineer...") @type string @minLength 1 @errorMessage { "minLength": "Summary is required" } @example "Motivated engineer with a focus on high-performance web systems." */
    summary: string;
    /** Academic background history. @type array @minItems 1 @errorMessage { "minItems": "Education section is required" } */
    education: Education[];
    /** Technical and soft skills. @type object @errorMessage { "required": "Skills section is required" } */
    skills: Skills;

    /** Professional work history. @type array @nullable */
    experiences?: Experience[];
    /** Independent or open-source work. @type array @nullable */
    projects?: Project[];
    /** Professional licenses and certifications. @type array @nullable */
    certifications?: Certification[];
    /** Spoken and written languages. @type array @nullable */
    languages?: Language[];
}