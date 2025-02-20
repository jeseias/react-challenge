import React, { useEffect, useState } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import { ButtonAdd, LogoSVG } from 'presentation/components'
import { NoJournals } from './no-journals'
import { List } from './list'
import { Journal } from 'domain/models/journal'
import { LoadJournals } from 'domain/usecases/load-journals'
import { useParams } from 'react-router-dom'

type Props = {
  loadJournals: LoadJournals
}

const JournalsList = ({ loadJournals }: Props) => {
  const [journals, setJournals] = useState<Journal[]>([])
  const { userId } = useParams()

  const handleLoadJournals = async () => {
    try {
      const result = await loadJournals.load()
      if (result) setJournals(result.journals)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleLoadJournals()
  }, [])
  return (
    <Box p="3.2rem 2.8rem 3.209rem 2.8rem" h="100%">
      <Flex justifyContent="space-between" alignItems="center">
        <LogoSVG />
        {journals[0] && <ButtonAdd to={`/journals/${userId}/create`}>Add Journal</ButtonAdd>}
      </Flex>
      {journals[0] ? (<List journals={journals} />) : <NoJournals />}
    </Box>
  )
}

export default JournalsList