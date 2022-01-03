import React from 'react'
import { Grid } from "@chakra-ui/react"
import { Entry as EntryProps } from 'domain/models/entry'
import { Entry } from 'presentation/components'

type Props = {
  entries: EntryProps[]
}

export const EntriesList: React.FC<Props> = ({ entries }) => {
  return (
    <Grid 
      gridTemplateColumns="repeat(2, 15.4rem)" 
      gridTemplateRows="repeat(auto-fill, 17.8rem)" 
      gap="2rem" 
      mt="1.9rem"
      aria-label="entries list"
    >
      {entries.map(entry => <Entry key={entry.id} {...entry} />)}
    </Grid>
  )
}
