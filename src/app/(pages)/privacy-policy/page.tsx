import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Privacy Policy | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Privacy Policy | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function PrivacyPolicyPage(){
	 return(
	 	 <main style={{color: "white"}}>
		 	<div style={{marginTop: "15px"}} className="center"><h1>Privacy Policy</h1></div>
			<p style={{padding: "2vw 20%"}}>Welcome to our Privacy Policy for {process.env.NEXT_PUBLIC_BUSINESS_NAME}. Your privacy is critically important to us regarding any information we may collect while operating our website. This Privacy Policy applies to {process.env.NEXT_PUBLIC_BUSINESS_NAME} (hereinafter, “us”, “we”, or “{process.env.NEXT_PUBLIC_BUSINESS_NAME} “). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy (“Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.
<br /><br />
This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.
<br /><br />
Website Visitors
Like most website operators, {process.env.NEXT_PUBLIC_BUSINESS_NAME} collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. {process.env.NEXT_PUBLIC_BUSINESS_NAME} purpose in collecting non-personally identifying information is to better understand how {process.env.NEXT_PUBLIC_BUSINESS_NAME} visitors use its website. From time to time, {process.env.NEXT_PUBLIC_BUSINESS_NAME} may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
<br /><br />
{process.env.NEXT_PUBLIC_BUSINESS_NAME} also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on the website {process.env.NEXT_PUBLIC_BUSINESS_NAME} only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.
<br /><br />
Gathering of Personally-Identifying Information
Certain visitors to {process.env.NEXT_PUBLIC_BUSINESS_NAME} websites choose to interact with {process.env.NEXT_PUBLIC_BUSINESS_NAME} in ways that require {process.env.NEXT_PUBLIC_BUSINESS_NAME} to gather personally-identifying information. The amount and type of information that {process.env.NEXT_PUBLIC_BUSINESS_NAME} gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at {process.env.NEXT_PUBLIC_BUSINESS_NAME} to provide a username and email address.
<br /><br />
Security
The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
<br /><br />
Advertisements
Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by {process.env.NEXT_PUBLIC_BUSINESS_NAME} and does not cover the use of cookies by any advertisers.
<br /><br />
Links To External Sites
Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.
<br /><br />
We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.
<br /><br />
{process.env.NEXT_PUBLIC_BUSINESS_NAME} uses Google AdWords for remarketing
{process.env.NEXT_PUBLIC_BUSINESS_NAME} uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven’t completed a task on our site, for example using the contact form to make an enquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone’s past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google’s privacy policy.
<br /><br />
You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.
<br /><br />
Protection of Certain Personally-Identifying Information
{process.env.NEXT_PUBLIC_BUSINESS_NAME} discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on {process.env.NEXT_PUBLIC_BUSINESS_NAME} behalf or to provide services available at {process.env.NEXT_PUBLIC_BUSINESS_NAME} website, and (ii) that have agreed</p>
	 	 </main>
	 )
}