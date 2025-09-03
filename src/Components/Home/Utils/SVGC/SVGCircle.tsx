
export default function SVGCircle({border,svg}:{border:boolean,svg:React.ReactNode}) {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-4 items-center'>

            <div className={`rounded-full   bg-[#E6F0ED] flex items-center justify-center p-3`}>
            <div className='h-fit  w-fit p-[0.12rem]' style={{
                background: border ? 'radial-gradient(circle, #065F46 0%, #047857 50%, #10B981 100%)' : 'transparent'
            }}>
                <div className='bg-[#E6F0ED]'>
         {svg}
</div>
</div>
  </div>
  </div>

  )
}
