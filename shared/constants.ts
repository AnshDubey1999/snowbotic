import { SummaryProductCardProps, TestimonialCardProps, ValueCardProps } from "./types";

export const ourValues: ValueCardProps[] = [
    {
        id: '1',
        title: 'Economical',
        description: 'Cost-effective operation Countervail labor shortage.',
    },
    {
        id: '2',
        title: 'Environmental',
        description: 'All-electric cleantech Pollution-free operations in the house.',
    },
    {
        id: '3',
        title: 'Social',
        description: 'Safe and snow-free sidewalks Snow shoveler to robot supervisors.',
    }
];


export const productsSummary: SummaryProductCardProps[] = [
    {
        id: '1',
        title: 'Snow Robot',
        description: 'Revolutionize snow removal with our snow robot, designed to effortlessly clear your driveways',
        srcImage: '/images/products/snowrobot.png',
        altText: 'Snow Robot'
    },
    {
        id: '2',
        title: 'Lawn Robot',
        description: 'Revolutionize snow removal with our snow robot, designed to effortlessly clear your driveways',
        srcImage: '/images/products/lawn-robot.jpg',
        altText: 'Lawn Robot'
    },
    {
        id: '3',
        title: 'Security Robot',
        description: 'Revolutionize snow removal with our snow robot, designed to effortlessly clear your driveways',
        srcImage: '/images/products/security-robot.png',
        altText: 'Security Robot'
    },
    {
        id: '4',
        title: 'Ice Scrapper',
        description: 'Revolutionize snow removal with our snow robot, designed to effortlessly clear your driveways',
        srcImage: '/images/products/icescrapper.jpg',
        altText: 'Ice Scrapper'
    },
    {
        id: '5',
        title: 'Manual Plower',
        description: 'Revolutionize snow removal with our snow robot, designed to effortlessly clear your driveways',
        srcImage: '/images/products/plow-robot.jpg',
        altText: 'Manual Plower'
    },
    {
        id: '6',
        title: 'Shovel Robot',
        description: 'Revolutionize snow removal with our snow robot, designed to effortlessly clear your driveways',
        srcImage: '/images/products/snow_plow.jpg',
        altText: 'Shovel Robot'
    }
];

export const testimonials: TestimonialCardProps[] = [
    {
        id: '1',
        avatarImage: '/images/testimonials/user1.jpg',
        altText: 'User 1',
        name: 'Sophie Smith',
        stars: 5, 
        description: "As someone who lives in a snowy area, the idea of a snowrobot is amazing! I would definitely buy one as soon as it's released. The thought of not having to wake up early to shovel or worry about slipping on ice sounds like a dream come true",
    },
    {
        id: '2',
        avatarImage: '/images/testimonials/user2.jpg',
        altText: 'User 2',
        name: 'Ethan Smith',
        stars: 5, 
        description: "I live in an area that gets a lot of snow, so a snowrobot that could clear my driveway and sidewalks would be incredibly helpful. If this company can produce a snowrobot that can handle heavy snowfall and is easy to operate, I would be interested in purchasing one.",
    }
];