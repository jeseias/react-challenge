import { Grid } from '@chakra-ui/react'
import { Journal as JournalProps } from 'domain/models/journal'
import { Journal } from 'presentation/components'
import React from 'react'

type Props = {
  journals: JournalProps[]
}

export const List: React.FC<Props> = ({ journals }: Props) => {
  return (
    <Grid gridTemplateColumns="1fr 1fr" gap="2.34rem" mt="3.372rem" h="100%">
      {journals.map(journal => <Journal key={journal.id} {...journal} />)}
    </Grid>
  )
}