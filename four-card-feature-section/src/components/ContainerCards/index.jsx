import Card from "../Card"
import IconSupervisor from "/images/icon-supervisor.svg"
import IconTeamBuilder from "/images/icon-team-builder.svg"
import IconKarma from "/images/icon-karma.svg"
import IconCalculator from "/images/icon-calculator.svg"

const ContainerCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      <Card 
        title="Supervisor"
        description="Monitors activity to identify project roadblocks"
        image={IconSupervisor}
        borderColor="border-cyan"
      />
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        <Card 
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          image={IconTeamBuilder}
          borderColor="border-red"
        />
        <Card 
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          image={IconKarma}
          borderColor="border-orange"
        />
      </div>
      <Card 
        title="Calculator"
        description="Uses data from past projects to provide better delivery estimates"
        image={IconCalculator}
        borderColor="border-blue"
      />
    </div>
  )
}

export default ContainerCards