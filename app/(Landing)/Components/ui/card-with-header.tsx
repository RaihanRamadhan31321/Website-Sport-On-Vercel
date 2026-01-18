type TCardWithHeaderProps = {
    title: string,
    children: React.ReactNode;
}
const CardWithHeader = ({title, children}:TCardWithHeaderProps) => {
    return(
       <div className="bg-white mt-8">
            <div className="px5 py-2 p-5 border-2 border-gray-200">
                <h2 className="font-bold text-lg">{title}</h2>
            </div>
            {children}
        </div>
    )
}

export default CardWithHeader;