import React from 'react'
import BackButton from '@/app/components/BackButton'
import FeedbackCard from '@/app/components/Feedback/FeedbackCard'

const feedback = () => {
  return (

    <div className="p-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-[#78828A] text-[24px] font-[500] flex items-center">
            FeedBacks
          </h1>
        </div>
      </div>
      <FeedbackCard />
    </div>
  )
}

export default feedback