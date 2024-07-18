const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Adiss Ababa University',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from Adiss Ababa University, Ethiopia.",
                year: '2021-present'
            },
            {
                id: 1,
                title: 'Yaberus Wolkite High School',
                degree: '',
                detail: "Completed High School from Yaberus Wolkite High School, Ethiopia.",
                year: '2018-2021'
            },
            {
                id: 2,
                title: "Melketsadik  School",
                degree: "",
                detail: "Completed Primary School from Melketsadik School, Ethiopia.",
                year: '2009-2018'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'iCog Labs',
                role: 'Software Developer',
                url: 'https://icog-labs.com/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '04/2024 - Present',
                location: 'Addis Ababa, Ethiopia'
            },
            

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
