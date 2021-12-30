import { Box } from '@chakra-ui/react'
import { PageRoutes } from 'main/constants/page-routes'
import { EmptySVG, LinkText } from 'presentation/components'
import React from 'react'

export const NoJournals: React.FC = () => {
  return (
    <>
      <Box mt="24.6rem" mb="7.936rem">
        <EmptySVG />
      </Box>
      <LinkText 
        to={PageRoutes.CreateJournal} 
        mb="14.8rem" 
        textAlign="center"
      >
        Create a journal
      </LinkText>
    </>
  )
}