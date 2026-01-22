export default function loading()  {
    return (
        <div className="min-h-screen bg-[#0a0a0a] animate-pulse">
            <div className="h-[50vh] w-full bg-white/5" />
            <div className="relative -mt-32 px-6 lg:px-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="h-6 w-24 rounded-full bg-white/10" />
                        <div className="h-20 w-3/4 rounded-2xl bg-white/10" />
                        <div className="flex gap-6">
                            <div className="h-6 w-32 rounded-lg bg-white/5" />
                            <div className="h-6 w-32 rounded-lg bg-white/5" />
                        </div>
                        <div className="space-y-3 pt-4">
                            <div className="h-4 w-full rounded-full bg-white/5" />
                            <div className="h-4 w-5/6 rounded-full bg-white/5" />
                        </div>
                        <div className="mt-10 aspect-video w-full rounded-[2.5rem] bg-white/5" />
                    </div>
                    <div className="lg:col-span-5">
                        <div className="h-96 w-full rounded-[3rem] bg-white/10" />
                    </div>
                </div>
            </div>
        </div>
    );
};