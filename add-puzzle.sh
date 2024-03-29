PUZZLE_DIR=$(dirname $(realpath $0))
YEAR=2023
DAY_NUMBER=$1

SOLUTION_TEMPLATE="$PUZZLE_DIR/src/solution.ts.template"
SOLUTION_DEST="$PUZZLE_DIR/src/$YEAR/solution-day-$DAY_NUMBER.ts"

TEST_SOLUTION_TEMPLATE="$PUZZLE_DIR/tests/solution.test.ts.template"
TEST_SOLUTION_DEST="$PUZZLE_DIR/tests/$YEAR/solution-day-$DAY_NUMBER.test.ts"

PUZZLE_EXAMPLE_TEMPLATE="$PUZZLE_DIR/resources/input-example.txt.template"
PUZZLE_EXAMPLE_DEST="$PUZZLE_DIR/resources/$YEAR/input-example-day-$DAY_NUMBER.txt"

PUZZLE_TEMPLATE="$PUZZLE_DIR/resources/input.txt.template"
PUZZLE_DEST="$PUZZLE_DIR/resources/$YEAR/input-day-$DAY_NUMBER.txt"


cp $SOLUTION_TEMPLATE $SOLUTION_DEST
cp $TEST_SOLUTION_TEMPLATE $TEST_SOLUTION_DEST
cp $PUZZLE_EXAMPLE_TEMPLATE $PUZZLE_EXAMPLE_DEST
cp $PUZZLE_TEMPLATE $PUZZLE_DEST
