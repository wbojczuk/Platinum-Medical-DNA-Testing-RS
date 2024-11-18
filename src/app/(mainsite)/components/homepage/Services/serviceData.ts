interface Service{
    name: string
    shortDesc: string
    desc: string
    img: string
}

const serviceData: Service[] = [
    
    {
        img: "./img/services/paternity.png",
        name: "Paternity DNA Testing",
        shortDesc: "Platinum Medical & DNA Testing offers professional paternity DNA testing to confirm biological relationships with accuracy and reliability.",
        desc: `Platinum Medical & DNA Testing offers professional paternity DNA testing to confirm biological relationships with accuracy and reliability. Whether for personal knowledge or legal matters like child support or custody, our tests provide clear and confidential results you can trust. We ensure a smooth, secure process from start to finish.`
    },
    {
        img: "./img/services/trio.png",
        name: "Trio DNA Testing",
        shortDesc: "Trio DNA Testing at Platinum Medical & DNA Testing involves analyzing samples from a child, the mother, and the alleged father to confirm paternity with the highest level of accuracy.",
        desc: `Trio DNA Testing at Platinum Medical & DNA Testing involves analyzing samples from a child, the mother, and the alleged father to confirm paternity with the highest level of accuracy. This method ensures reliable results by comparing all three DNA profiles, providing clarity and confidence for your family.`
    },
    {
        img: "./img/services/noninvasive.png",
        name: "Non-Invasive DNA Testing",
        shortDesc: "Platinum Medical & DNA Testing offers non-invasive DNA testing, a safe and painless way to obtain accurate results.",
        desc: `Platinum Medical & DNA Testing offers non-invasive DNA testing, a safe and painless way to obtain accurate results. This method, often used for prenatal paternity testing, requires only a simple blood sample from the mother and a cheek swab from the potential father. It provides reliable answers without any risk to the baby, ensuring peace of mind for all involved.`
    },
    {
        img: "./img/services/mitochondrial.png",
        name: "Mitochondrial DNA Testing",
        shortDesc: "Platinum Medical & DNA Testing offers Mitochondrial DNA Testing to trace maternal ancestry and confirm biological relationships through the maternal line.",
        desc: `Platinum Medical & DNA Testing offers Mitochondrial DNA Testing to trace maternal ancestry and confirm biological relationships through the maternal line. This test analyzes the unique DNA passed down from mothers to their children, providing valuable insights into family connections and genetic heritage. It’s a powerful tool for uncovering maternal lineage with precision and reliability.`
    }
    
]

export default serviceData