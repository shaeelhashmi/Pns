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
    <div className="grid grid-cols-2 gap-10 place-content-center">
      {data.map((item, idx) => {
        const isLast = idx === data.length - 1
        const isOdd = data.length % 2 !== 0

        return (
          <AdvisoryBox
            key={idx}
            Abbrev={item.Abbrev}
            Name={item.Name}
            Title={item.Title}
            Affiliation={item.Affiliation}
            className={
              isLast && isOdd ? 'col-start-1 col-end-3 justify-self-center' : ''
            }
          />
        )
      })}
    </div>
  )
}
