import EditorialBox from "./Box/EditorialBox"

export default function Editorial() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
      <EditorialBox  Heading="Rigorous Peer review" desc="All submissions undergo thorough peer review by
experts in relevant fields. We maintain the highest
standards of integrity, transparency, and excellence." button="View editorial board"/>
       <EditorialBox Heading="Quality Standards" desc="We encourage contributions that offer significant
advancements to scientific knowledge, including
interdisciplinary studies and innovative methodologies." button="Authors guidelines" />
    </div>
  )
}
