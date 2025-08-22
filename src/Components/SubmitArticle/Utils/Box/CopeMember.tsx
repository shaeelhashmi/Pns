import EmojiCircle from "./EmojiCircle"
export default function CopeMember(props:{emoji:string, name:string, role:string,subrole:string}) {
  return (
       <div className="bg-[#F3FBF9] border-[0.05px] rounded-md border-[#10B981] p-2">
                    <div className="grid grid-cols-[auto_1fr] ">
                        <div>
                            <EmojiCircle emoji={props.emoji} textSize="text-sm" colorClass="text-[#047857]" sizeClass="w-10 h-10" className="font-bold italic"/>
                            </div>  
                            <div>
                                <p className="text-[#064E3B] text-base font-bold italic">{props.name}</p>
                                <p className="text-[#374151] text-sm">{props.role}</p>
                                <p className="text-[#6B7280] text-[0.8rem]">{props.subrole}</p>

                             </div>
                             </div>
                </div>
  )
}
