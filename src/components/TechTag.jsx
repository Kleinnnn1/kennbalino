function TechTag({ icon: Icon, label, color }) {
    return (
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-all duration-200 shadow-md transform hover:scale-110 hover:ring-2 hover:ring-red-500">
            <Icon className={`text-lg ${color}`} />
            <span className="text-sm text-white">{label}</span>
        </div>
    );
}

export default TechTag;
