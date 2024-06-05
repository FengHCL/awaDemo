define({ 

	onViewCreated(){
      this.view.preShow = () => {
        alert(this.navigationContext);
      };
    }
});