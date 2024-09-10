import { Entry, Asset } from 'contentful';

// Story - Main content type
export interface Story {
  title: string;
  slug: string;
  description: string;
  content: RichTextContent;
  featuredImage: Asset;
  category: string;
  tags: string[];
  author: Author;
  publishDate: string;
  relatedStories: Story[];
}

export interface RichTextContent {
  // This will be a rich text field in Contentful
  // The exact structure depends on Contentful's rich text format
  json: any;
}

export interface Author {
  name: string;
  bio: string;
  avatar: Asset;
}

// Home Page
export interface HomePage {
  hero: Hero;
  communities: Communities;
  featuredStory: Story;
  getInvolved: GetInvolved;
  partners: Partners;
}

export interface Hero {
  title: string;
  description?: string;
  button?: string;
  buttonLink?: string;
}

export interface Communities {
  title: string;
  description: string;
  // CommunitySlide is now generated from Story
  featuredStories: Story[];
}

// CommunitySlide is now derived from Story
export interface CommunitySlide {
  title: string;
  description: string;
  image: Asset;
  buttonText: string;
  buttonLink: string;
}

export interface GetInvolved {
  title: string;
  description: string;
  opportunities: Opportunity[];
}

export interface Opportunity {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface Partners {
  title: string;
  description: string;
  cards: PartnerCard[];
}

export interface PartnerCard {
  name: string;
  description: string;
  image: Asset;
}

// Navigation
export interface Navigation {
  items: NavigationItem[];
}

export interface NavigationItem {
  label: string;
  link: string;
  subItems?: NavigationItem[];
}

// Footer
export interface Footer {
  logo: Asset;
  socialLinks: SocialLink[];
  navigationColumns: FooterNavigationColumn[];
  bottomText: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: Asset;
}

export interface FooterNavigationColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  url: string;
}

// Settings
export interface Settings {
  siteName: string;
  favicon: Asset;
  defaultMetaDescription: string;
  defaultOgImage: Asset;
}

// About Us Page
export interface AboutUsPage {
  mission: RichTextContent;
  vision: RichTextContent;
  team: TeamMember[];
  contactInfo: ContactInfo;
  annualReports?: AnnualReport[];
}

export interface TeamMember {
  name: string;
  position: string;
  bio: RichTextContent;
  image: Asset;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface AnnualReport {
  year: number;
  title: string;
  file: Asset;
}

// Get Involved Page
export interface GetInvolvedPage {
  volunteerOpportunities: VolunteerOpportunity[];
  fundersAndPartners: FunderPartner[];
  contactForm: ContactForm;
  donationLink: string;
}

export interface VolunteerOpportunity {
  title: string;
  description: RichTextContent;
  requirements: string[];
  applicationLink: string;
}

export interface FunderPartner {
  name: string;
  logo: Asset;
  description: string;
  website: string;
}

export interface ContactForm {
  title: string;
  description: string;
  fields: FormField[];
  submitButtonText: string;
}

export interface FormField {
  label: string;
  type: 'text' | 'email' | 'textarea';
  required: boolean;
}

// Share Your Story Page
export interface ShareYourStoryPage {
  title: string;
  description: RichTextContent;
  formInstructions: RichTextContent;
  storyForm: StoryForm;
}

export interface StoryForm extends ContactForm {
  storyTypeOptions: string[];
}

// Community Page (expanded)
export interface CommunityPage {
  name: string;
  description: string;
  featuredStories: Story[];
  legends: any[]; // TODO: Define this type
  images: Asset[];
  history: RichTextContent;
  impactStories: Story[];
  communityVoices: Testimonial[];
  location: Location;
}

export interface Testimonial {
  author: string;
  content: RichTextContent;
  image?: Asset;
  video?: Asset;
}

export interface Location {
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  mapImage: Asset;
}

// Search Functionality
export interface SearchResults {
  stories: Story[];
  communities: CommunityPage[];
  pages: (AboutUsPage | GetInvolvedPage | ShareYourStoryPage)[];
}

// Multilingual Support
export interface LanguageSettings {
  availableLanguages: Language[];
  defaultLanguage: Language;
}

export interface Language {
  code: string;
  name: string;
  flag: Asset;
}
