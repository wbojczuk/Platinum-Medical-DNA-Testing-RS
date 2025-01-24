interface Service{
    name: string
    shortDesc: string
    desc: string
    img: string
}

const serviceData: Service[] = [
    
    {
        img: "./img/services/paternity.webp",
        name: "Paternity DNA Testing",
        shortDesc: "Platinum Medical & DNA Testing offers professional paternity DNA testing to confirm biological relationships with accuracy and reliability.",
        desc: `Platinum Medical & DNA Testing offers professional paternity DNA testing to confirm biological relationships with accuracy and reliability. Whether for personal knowledge or legal matters like child support or custody, our tests provide clear and confidential results you can trust. We ensure a smooth, secure process from start to finish.`
    },
    {
        img: "./img/services/trio.webp",
        name: "Trio DNA Testing",
        shortDesc: "Trio DNA Testing at Platinum Medical & DNA Testing involves analyzing samples from a child, the mother, and the alleged father to confirm paternity with the highest level of accuracy.",
        desc: `Trio DNA Testing at Platinum Medical & DNA Testing involves analyzing samples from a child, the mother, and the alleged father to confirm paternity with the highest level of accuracy. This method ensures reliable results by comparing all three DNA profiles, providing clarity and confidence for your family.`
    },
    {
        img: "./img/services/maternity.webp",
        name: "Maternity Testing",
        shortDesc: "Providing reliable maternity testing to confirm the biological relationship between a child and mother",
        desc: `Platinum Medical & DNA Testing provides reliable maternity testing to confirm the biological relationship between a child and mother. This test is accurate, secure, and can be used for personal knowledge or legal purposes, offering peace of mind and clarity when it matters most.`
    },
    {
        img: "./img/services/mitochondrial.webp",
        name: "Mitochondrial DNA Testing",
        shortDesc: "Platinum Medical & DNA Testing offers Mitochondrial DNA Testing to trace maternal ancestry and confirm biological relationships through the maternal line.",
        desc: `Platinum Medical & DNA Testing offers Mitochondrial DNA Testing to trace maternal ancestry and confirm biological relationships through the maternal line. This test analyzes the unique DNA passed down from mothers to their children, providing valuable insights into family connections and genetic heritage. It’s a powerful tool for uncovering maternal lineage with precision and reliability.`
    }
    
]

export default serviceData