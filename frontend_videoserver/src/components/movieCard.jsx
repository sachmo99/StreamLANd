export default function MovieCard({ idx, name, thumbNail, onItemSelection }) {
    let thumbNailUrl =  `http://${window.location.host}/pictures/${thumbNail}`
    return (
        <div id={idx} className="max-w-sm rounded-xl overflow-hidden shadow-lg m-2 hover:scale-110 transition duration-300">
            <a href={`http://${window.location.host}/video/${name}`} className="no-underline hover:no-underline">
                <img src={`${thumbNailUrl}`} alt={name} className="w-full h-32 object-cover" />
                <div className="px-6 py-2 bg-zinc-200">
                    <h2 className="font-bold text-xl mb-2 text-black">{name.toUpperCase()}</h2>
                </div>
            </a>
        </div>

        
    );
}