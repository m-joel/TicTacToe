var TicTacToe = {
	//[0,1,2,3,4,5]
	//         ["Actual Player turn 1 or 2", "Player 1 Name", "Player 2 Name", "Player 1 Score", "Player 2 Score", "ID de génération"]
	Variable : [0                          , "Player1"      , "Player2"      , 0               , 0               , ""],
	Start : function() {
		this.Variable[0] = 1;
		this.Variable[1] = document.getElementById("TicTacToe_Input_1").value;
		this.Variable[2] = document.getElementById("TicTacToe_Input_2").value;
		document.getElementById("TicTacToe_P1_Name").innerHTML = this.Variable[1];
		document.getElementById("TicTacToe_P2_Name").innerHTML = this.Variable[2];
		document.getElementById("TicTacToe_Button").innerHTML = '<button class="menubtn" onclick="TicTacToe.Reset()">Reset</button>';
	},
	Reset : function() {
		this.Generate(this.Variable[5],0,0);
		this.Variable = [0,"Player1","Player2",0,0,this.Variable[5]];
	},
	Generate : function(ElementId, PScore, PPScore) {
		this.Variable[3] = PScore;
		this.Variable[4] = PPScore;
		this.Variable[5] = ElementId;
		document.getElementById(ElementId).innerHTML = '<input id="TicTacToe_Input_1" value="Player 1" maxlength="8"/> <input id="TicTacToe_Input_2" value="Player 2" maxlength="8"/> <span id="TicTacToe_Button"><button class="menubtn" onclick="TicTacToe.Start()">Start</button></span><span id="TicTacToe_Game"><table><tr><th>Score :</th><th><span id="TicTacToe_P1_Name">Player 1</span> : <span id="TicTacToe_P1_Score">'+PScore+'</span></th><th><span id="TicTacToe_P2_Name">Player 2</span> : <span id="TicTacToe_P2_Score">'+PPScore+'</span></th></tr><tr><td id="TicTacToe_1"><button onclick="TicTacToe.Choose(1)">Choose</button></td><td id="TicTacToe_2"><button onclick="TicTacToe.Choose(2)">Choose</button></td><td id="TicTacToe_3"><button onclick="TicTacToe.Choose(3)">Choose</button></td></tr><tr><td id="TicTacToe_4"><button onclick="TicTacToe.Choose(4)">Choose</button></td><td id="TicTacToe_5"><button onclick="TicTacToe.Choose(5)">Choose</button></td><td id="TicTacToe_6"><button onclick="TicTacToe.Choose(6)">Choose</button></td></tr><tr><td id="TicTacToe_7"><button onclick="TicTacToe.Choose(7)">Choose</button></td><td id="TicTacToe_8"><button onclick="TicTacToe.Choose(8)">Choose</button></td><td id="TicTacToe_9"><button onclick="TicTacToe.Choose(9)">Choose</button></td></tr></table></span>';
	},
	Choose : function(num) {
		if (this.Variable[0] != 0) {
			doc = document.getElementById("TicTacToe_"+num);
			if(doc.classList.contains("chosen")==false) {
				doc.className += "chosen "+ this.Variable[0];
				doc.innerHTML = "<p>"+this.Variable[this.Variable[0]]+"</p>";
				if(this.Variable[0] == 1) this.Variable[0] = 2;
				else this.Variable[0] = 1;
			}
			this.Check();
		}
	},
	Check : function() {
		for(var a = 0; a < 1; a++) {
			if(document.getElementById("TicTacToe_1").classList.contains(a+1)) {
				if(document.getElementById("TicTacToe_2").classList.contains(a+1)) {
					if(document.getElementById("TicTacToe_3").classList.contains(a+1)) this.Win(a+1);
				}
				if(document.getElementById("TicTacToe_4").classList.contains(a+1)) {
				    if(document.getElementById("TicTacToe_7").classList.contains(a+1)) this.Win(a+1);
				}
				if(document.getElementById("TicTacToe_5").classList.contains(a+1)) {
				    if(document.getElementById("TicTacToe_9").classList.contains(a+1)) this.Win(a+1);
				}
			}
			if(document.getElementById("TicTacToe_9").classList.contains(a+1)) {
			    if(document.getElementById("TicTacToe_6").classList.contains(a+1)) {
			        if(document.getElementById("TicTacToe_3").classList.contains(a+1)) this.Win(a+1);
			    }
			    if(document.getElementById("TicTacToe_8").classList.contains(a+1)) {
			        if(document.getElementById("TicTacToe_7").classList.contains(a+1)) this.Win(a+1);
			    }
			    
			}
			if(document.getElementById("TicTacToe_5").classList.contains(a+1)) {
				if(document.getElementById("TicTacToe_4").classList.contains(a+1)) {
				    if(document.getElementById("TicTacToe_6").classList.contains(a+1)) this.Win(a+1);
				}
				if(document.getElementById("TicTacToe_2").classList.contains(a+1)) {
				    if(document.getElementById("TicTacToe_8").classList.contains(a+1)) this.Win(a+1);
				}
			}
		}
	},
	Win : function(player) {
		this.Variable[player+2]++ 
		document.getElementById("TicTacToe_P"+player+"_Score").innerHTML = this.Variable[player+2]
		window.alert(this.Variable[player]+" has won !");
	}
};