import Link from "next/link";

const Links =()=>{
    const links =[
        {
            title: "Home",
            path:"/",
        },
        {
            title: "About",
            path: "/about",
        
        },

        {
            title:"Blog",
            path: "/posts",
        },
    ];

    return (<div>
        {
            links.map((links=>(<Link href={links.path} key={links.title}>{links.title}</Link>)))
        }
    </div>)
}

export default Links