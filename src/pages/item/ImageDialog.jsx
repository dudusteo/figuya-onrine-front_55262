import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import * as React from "react";
import StaticImage from "../../core/static-image";

import PhotoLibrary from "@mui/icons-material/PhotoLibrary";

const ImageDialog = (props) => {
	const { images = [], open, onClose } = props;

	const [selectedImage, setSelectedImage] = React.useState(null);

	const handleListItemClick = (image) => {
		setSelectedImage(image);
	};

	const handleOkClick = () => {
		onClose();
	};

	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
			<DialogTitle>Select an image</DialogTitle>
			<DialogContent>
				{images.length > 0 ? (
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<List disablePadding>
								{images.map((image) => (
									<ListItem
										key={image.id}
										button
										selected={
											selectedImage?.id === image.id
										}
										onClick={() =>
											handleListItemClick(image)
										}
									>
										<ListItemIcon>
											<PhotoLibrary />
										</ListItemIcon>
										<ListItemText primary={image.name} />
									</ListItem>
								))}
							</List>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography
								variant="h6"
								component="h3"
								gutterBottom
							>
								Selected image
							</Typography>
							{selectedImage ? (
								<StaticImage
									src={selectedImage.path}
									alt={selectedImage.name}
								/>
							) : (
								<Typography
									variant="body2"
									color="textSecondary"
								>
									No image selected
								</Typography>
							)}
						</Grid>
					</Grid>
				) : (
					<Typography variant="body2" color="textSecondary">
						No images available
					</Typography>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button
					onClick={handleOkClick}
					disabled={!selectedImage}
					color="primary"
				>
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ImageDialog;