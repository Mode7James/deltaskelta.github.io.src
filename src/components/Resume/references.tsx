import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { AboutPage_site_siteMetadata_resume } from '../../gatsby-queries';

const styles = (_: Theme) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  references: AboutPage_site_siteMetadata_resume['references'];
}

const referencesComponent = ({ references }: Props) => (
  <div>
    references
    <div>{JSON.stringify(references)}</div>
  </div>
);

export const References = withStyles(styles)(referencesComponent);
