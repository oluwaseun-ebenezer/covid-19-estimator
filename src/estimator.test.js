import covid19ImpactEstimator from './estimator'

test('Making sure the covid19ImpactEstimator returns the expected output data', () => {
    const data = {
        region: {
            name: "Africa",
            avgAge: 19.7,
            avgDailyIncomeInUSD: 5,
            avgDailyIncomePopulation: 0.71
        },

        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614
    }

    const expectedOutput = {
        data: {
            region: {
                name: "Africa",
                avgAge: 19.7,
                avgDailyIncomeInUSD: 5,
                avgDailyIncomePopulation: 0.71
            },
    
            periodType: "days",
            timeToElapse: 58,
            reportedCases: 674,
            population: 66622705,
            totalHospitalBeds: 1380614
        },
        impact: {
            currentlyInfected: 6740,
            infectionsByRequestedTime: 3533701120,
            severeCasesByRequestedTime: 530055168,
            hospitalBedsByRequestedTime: -529571954,
            casesForICUByRequestedTime: 176685056,
            casesForVentilatorsByRequestedTime: 70674022,
            dollarsInFlight: 216286878,
        },
        severeImpact: {
            currentlyInfected: 33700,
            infectionsByRequestedTime: 17668505600,
            severeCasesByRequestedTime: 2650275840,
            hospitalBedsByRequestedTime: -2649792626,
            casesForICUByRequestedTime: 883425280,
            casesForVentilatorsByRequestedTime: 353370112,
            dollarsInFlight: 1081434394,
        }
    }

    const outputData = covid19ImpactEstimator(data)
    expect(outputData).toStrictEqual(expectedOutput)
})