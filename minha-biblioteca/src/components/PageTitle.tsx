import "./pageTitle.css"

interface PageTitleProp {
    title: string
}

export function PageTitle({ title }: PageTitleProp) {
    return <h1 className="page-title">{title}</h1>
}