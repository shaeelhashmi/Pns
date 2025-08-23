import AdvisoryBox from './Box/AdvisoryBox'

export default function Advisory() {
  const data = [
    { Abbrev: 'EIC', Name: 'Masroor Ikram', Title: 'Editor-in-Chief (Physics)', Affiliation: 'Pakistan Institute of Engineering and Applied Sciences (PIEAS), Pakistan' },
    { Abbrev: 'CE', Name: 'Sohail Hameed', Title: 'Chief Editor (Biosciences)', Affiliation: 'NIBGE-PIEAS, Pakistan' },
    { Abbrev: 'EIC', Name: 'Javed Akhtar', Title: 'Chief Editor (Chemistry, Materials Sciences)', Affiliation: 'Pakistan Academy of Sciences, Pakistan' },
    { Abbrev: 'EIC', Name: 'Shahab Khushnood', Title: 'Chief Editor (Engineering)', Affiliation: 'University of Wah, Pakistan' },
    { Abbrev: 'CE', Name: 'Muhammad Nasir Khan', Title: 'Section Editor (Mathematics)', Affiliation: 'International Islamic University, Islamabad, Pakistan' },
  ]

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 max-xl:mx-auto place-content-center">
      {data.map((item, idx) => {
        const isLast = idx === data.length - 1

        return (
          <AdvisoryBox
            key={idx}
            Abbrev={item.Abbrev}
            Name={item.Name}
            Title={item.Title}
            Affiliation={item.Affiliation}
            className={
              isLast  ? 'xl:col-start-1 xl:col-end-3 xl:justify-self-center ' : ''
            }
          />
        )
      })}
    </div>
  )
}
