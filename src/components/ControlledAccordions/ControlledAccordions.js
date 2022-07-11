import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
	root: {
	width: '100%',	
},
  heading: {
	fontSize: theme.typography.pxToRem(18),
	fontWeight: theme.typography.fontWeightBold,
	color: '#194484',
  },
}));

export default function SimpleAccordion({data}) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
	  		{data && data.map((item, id) => {
				return (
		  			<Accordion key={id}>
		  				<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`panel${id}a-content`}
						id={`panel${id}a-header`}>

							<Typography className={classes.heading}>
								{item.question}
							</Typography>

		  				</AccordionSummary>
		 				 <AccordionDetails>
							<Typography>
								{item.answer}
							</Typography>
		 				 </AccordionDetails>
					</Accordion>
				)
		  
	  		})}
	
		</div>
	);
}