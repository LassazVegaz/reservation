import { Add as AddIcon } from "@mui/icons-material";
import {
	Box,
	Button,
	Container,
	styled,
	TextField,
	Typography,
} from "@mui/material";
import headerImg from "./assets/header.png";
import deluxeIm from "./assets/deluxe.png";

const PRIMARY_COLOR = "#9C682E";

// an array of 10 elements
const niceBoxes = Array.from({ length: 10 }, (_, i) => i);

const sectionSx = {
	border: "5px solid #AC7B47",
	boxShadow: "4px 4px 13px 10px rgba(0, 0, 0, 0.25)",
	borderRadius: "50px",
};

const MyInputField = ({ text }) => (
	<Box
		sx={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		}}
	>
		<Typography
			sx={{
				color: "white",
			}}
		>
			{text}
		</Typography>
		<TextField
			size="small"
			sx={{
				backgroundColor: "white",
				borderRadius: "15px",
				".MuiOutlinedInput-notchedOutline": {
					border: "none",
				},
			}}
		/>
	</Box>
);

const NICEBOX_DIM = "130px";
const NiceBox = styled(Box)(() => ({
	width: NICEBOX_DIM,
	height: NICEBOX_DIM,
	background: "#FFFFFF",
	border: "2px solid #AC7B47",
	boxShadow: "5px 5px 7px 1px rgba(0, 0, 0, 0.2)",
	borderRadius: 24,
}));

const IconRow = ({ text, Icon }) => (
	<Box
		sx={{
			display: "flex",
			columnGap: "20px",
		}}
	>
		<Icon />
		<Typography>{text}</Typography>
	</Box>
);

function App() {
	return (
		<>
			<Box
				component="img"
				src={headerImg}
				sx={{
					width: "100%",
				}}
			/>

			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "rgba(172, 123, 71, 0.91)",
						transform: "translateY(-50%)",
						py: "27px",
						px: "41px",
					}}
				>
					<MyInputField text="Check In" />
					<MyInputField text="Check out" />
					<Button
						sx={{
							backgroundColor: "rgba(29, 138, 2, 0.9)",
							color: "white",
							textTransform: "none",
							px: 2,
						}}
					>
						Check Availability
					</Button>
				</Box>

				<Box height={80} />

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(5, 1fr)",
						rowGap: "100px",
						padding: "50px",
						...sectionSx,
					}}
				>
					{niceBoxes.map((i) => (
						<NiceBox key={i} />
					))}
				</Box>

				<Box height={80} />

				<Box
					sx={{
						...sectionSx,
						padding: "52px",
						display: "grid",
						gridTemplateColumns: "300px repeat(2, 1fr)",
						rowGap: "75px",
					}}
				>
					<Typography
						sx={{
							gridColumn: "1 / 4",
							backgroundColor: PRIMARY_COLOR,
							color: "#B4E100",
							borderRadius: "18px",
							fontSize: "32pxv",
							py: "15px",
							px: "45px",
						}}
					>
						Deluxe
					</Typography>

					<Box component="img" src={deluxeIm} />

					<Box
						sx={{
							pl: "65px",
							alignSelf: "center",
							display: "flex",
							flexDirection: "column",
							rowGap: "20px",
						}}
					>
						<IconRow text="King bed" Icon={AddIcon} />
						<IconRow text="King bed" Icon={AddIcon} />
						<IconRow text="King bed" Icon={AddIcon} />
					</Box>

					<Typography
						sx={{
							fontSize: "32px",
							color: "#FF3E3E",
							textAlign: "center",
						}}
					>
						LKR 15 000.00
					</Typography>
				</Box>

				<Box height={77} />

				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Button
						variant="contained"
						sx={{
							textTransform: "none",
							width: "400px",
							borderRadius: "18px",
						}}
					>
						Book now !
					</Button>
				</Box>

				<Box height={100} />
			</Container>
		</>
	);
}

export default App;
