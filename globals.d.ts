interface faqType{
    question: string,
    answer: string
}

interface teamMemberType{
    imgSrc: string,
    description: string,
    role: string,
    name: string
}

interface linkProps{
    href: string,
    target: string,
    className: string,
    style: any,
    isLocal: boolean
}

interface reviewType{
    title: string,
    desc: string,
    name: string,
    role: string
}


interface multiPartFormSection{
    elements: any,
    title: string,
    subtitle?: string
}

interface servicesModuleType{
    services: serviceType[]
}

interface serviceType{
    icon: any,
    title: string,
    description: string,
    backgroundImageUrl: string,
    url?: string
}