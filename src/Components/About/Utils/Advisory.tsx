import AdvisoryBox from './Box/AdvisoryBox'
export default function Advisory() {
  const data = [
    { img: './masroor.png', Name: 'Masroor Ikram', Title: 'Editor-in-Chief (Physics)', Affiliation: 'Pakistan Institute of Engineering and Applied Sciences (PIEAS), Pakistan' },
    { img: './SohailHameed.png', Name: 'Sohail Hameed', Title: 'Chief Editor (Biosciences)', Affiliation: 'NIBGE-PIEAS, Pakistan' },
    { img: './JavedAkhtar.png', Name: 'Javed Akhtar', Title: 'Chief Editor (Chemistry, Materials Sciences)', Affiliation: 'Pakistan Academy of Sciences, Pakistan' },
    { img: './ShahabKhushnood.png', Name: 'Shahab Khushnood', Title: 'Chief Editor (Engineering)', Affiliation: 'University of Wah, Pakistan' },
    { img: './MuhammadNasirKhan.png', Name: 'Muhammad Nasir Khan', Title: 'Section Editor (Mathematics)', Affiliation: 'International Islamic University, Islamabad, Pakistan' },
    {img:'./yasir.jpg', Name: 'Yasar Ayaz', Title: 'Chief Editor (Artificial Intelligence)', Affiliation: 'National University of Sciences and Technology (NUST), Pakistan' }
  ]

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 max-xl:mx-auto place-content-center">
      {data.map((item, idx) => {
        // const isLast = idx === data.length - 1

        return (
          <AdvisoryBox
            key={idx}
            img={item.img}
            Name={item.Name}
            Title={item.Title}
            Affiliation={item.Affiliation}
            // className={
            //   isLast  ? 'xl:col-start-1 xl:col-end-3 xl:justify-self-center ' : ''
            // }
          />
        )
      })}
    </div>
  )
}
