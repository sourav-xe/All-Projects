const steps = ['Order Placed', 'Processed', 'Shipped', 'Out for Delivery', 'Delivered']

function TrackingStatus({ currentStatus }) {
  const currentIndex = steps.indexOf(currentStatus)

  return (
    <div className="flex flex-col gap-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-4 h-4 rounded-full border-2 mr-2
              ${index <= currentIndex ? 'bg-green-500 border-green-500' : 'border-gray-400'}
            `}
          ></div>
          <span className={`${index <= currentIndex ? 'text-green-600' : 'text-gray-500'}`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TrackingStatus
