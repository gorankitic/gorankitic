

type SectionHeadingProps = {
    children: React.ReactNode
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
    return (
        <h2 className="font-medium text-2xl mb-8 dark:text-gray-100">{children}</h2>
    )
}

export default SectionHeading