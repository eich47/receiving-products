import React from 'react'

const SectionTitle = (props: Props) => {
  return (
    <>
      <h3 className="h3 my-3">{props.title}</h3>
    </>
  )
}

type Props = {
  title: string
}

export default SectionTitle
