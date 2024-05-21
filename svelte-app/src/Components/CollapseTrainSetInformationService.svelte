<script>
    export let trainComposition = {};
</script>


    <div>
        <h1>TrainSetInformationService</h1>
        <p>
            The TrainSetInformationService describes basic
            information about the composition of a train.
        </p>
        <div>
            <b>coachnumber: </b>{trainComposition.coachNumber}
        </div>
        <div>
            <b
                >coach position in trainset:
            </b>{trainComposition.coachPositionInTrainSet}
        </div>
        <div><b>coachstate: </b>{trainComposition.coachState}</div>
        <div><b>front cabin: </b>{trainComposition.frontCabin}</div>
        <div>
            <b>coupled side: </b>{trainComposition.coupledSide}
        </div>
        <div><b>coach type: </b>{trainComposition.coachType}</div>
    </div>
