type DisplayCardProps = {
    children: React.ReactNode;
}

export default function DisplayCard({ children }: DisplayCardProps) {
    return (
        <div className="w-full max-w-none rounded-xl bg-gray-800 text-white p-6 bg-[#252627]">
            { children }
        </div>
    )
}