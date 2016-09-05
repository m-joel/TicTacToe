var TicTacToe = {
	Variable : ["","","","","","","","",""],
	Turn : [0,"Player1","Player2",0,0],
	Start : function() {
		TicTacToe.Turn[0] = 1;
		TicTacToe.Turn[1] = document.getElementById("TicTacToe_Input_1").value;
		TicTacToe.Turn[2] = document.getElementById("TicTacToe_Input_2").value;
		document.getElementById("TicTacToe_P1_Name").innerHTML = TicTacToe.Turn[1];
		document.getElementById("TicTacToe_P2_Name").innerHTML = TicTacToe.Turn[2];
		document.getElementById("TicTacToe_Button").innerHTML = '<button onclick="TicTacToe.Reset()">Reset</button>';
	},
	Reset : function() {
		TicTacToe.Variable = ["","","","","","","","",""];
		TicTacToe.Turn = [0,"Player1","Player2",0,0];
		document.getElementById("TicTacToe_Input_1").value = TicTacToe.Turn[1];
		document.getElementById("TicTacToe_Input_2").value = TicTacToe.Turn[2];
		document.getElementById("TicTacToe_Game").innerHTML = '<table><tr><th>Score :</th><th>Player 1 : <span id="TicTacToe_Score_Player_1">0</span></th><th>Player 2 : <span id="TicTacToe_Score_Player_2">0</span></th></tr><tr><td id="1"><button onclick="TicTacToe.Choose(1)">Choose</button></td><td id="2"><button onclick="TicTacToe.Choose(2)">Choose</button></td><td id="3"><button onclick="TicTacToe.Choose(3)">Choose</button></td></tr><tr><td id="4"><button onclick="TicTacToe.Choose(4)">Choose</button></td><td id="5"><button onclick="TicTacToe.Choose(5)">Choose</button></td><td id="6"><button onclick="TicTacToe.Choose(6)">Choose</button></td></tr><tr><td id="7"><button onclick="TicTacToe.Choose(7)">Choose</button></td><td id="8"><button onclick="TicTacToe.Choose(8)">Choose</button></td><td id="9"><button onclick="TicTacToe.Choose(9)">Choose</button></td></tr></table>';
		document.getElementById("TicTacToe_Button").innerHTML = '<button onclick="TicTacToe.Start()">Start</button>';
	},
	Generate : function(ElementId) {
		document.getElementById(ElementId).innerHTML = '<input id="TicTacToe_Input_1" value="Player 1"/> <input id="TicTacToe_Input_2" value="Player 2"/><span id="TicTacToe_Button"><button onclick="TicTacToe.Start()">Start</button></span><span id="TicTacToe_Game"><table><tr><th>Score :</th><th><span id="TicTacToe_P1_Name">Player 1</span> : <span id="TicTacToe_P1_Score">0</span></th><th><span id="TicTacToe_P2_Name">Player 2</span> : <span id="TicTacToe_P2_Score">0</span></th></tr><tr><td id="TicTacToe_1"><button onclick="TicTacToe.Choose(1)">Choose</button></td><td id="TicTacToe_2"><button onclick="TicTacToe.Choose(2)">Choose</button></td><td id="TicTacToe_3"><button onclick="TicTacToe.Choose(3)">Choose</button></td></tr><tr><td id="TicTacToe_4"><button onclick="TicTacToe.Choose(4)">Choose</button></td><td id="TicTacToe_5"><button onclick="TicTacToe.Choose(5)">Choose</button></td><td id="TicTacToe_6"><button onclick="TicTacToe.Choose(6)">Choose</button></td></tr><tr><td id="TicTacToe_7"><button onclick="TicTacToe.Choose(7)">Choose</button></td><td id="TicTacToe_8"><button onclick="TicTacToe.Choose(8)">Choose</button></td><td id="TicTacToe_9"><button onclick="TicTacToe.Choose(9)">Choose</button></td></tr></table></span>';
	},
	Choose : function(num) {
		if (TicTacToe.Turn[0] != 0) {
			if (TicTacToe.Variable[num-1] == "") {
			TicTacToe.Variable[num-1] = TicTacToe.Turn[TicTacToe.Turn[0]];
			document.getElementById("TicTacToe_"+num).innerHTML = "<p>"+TicTacToe.Turn[TicTacToe.Turn[0]]+"</p>";
				if(TicTacToe.Turn[0] == 1) {
					TicTacToe.Turn[0] = 2;
				} else {
					TicTacToe.Turn[0] = 1;
				}
			}
		}
		TicTacToe.Check();
	},
	Check : function() {
		/**
		123,456,789,159,357,147,258,369
		012;345;678;048;246;036;047;258
		**/
		if (TicTacToe.Variable[0] == TicTacToe.Variable[1] && TicTacToe.Variable[0] == TicTacToe.Variable[2]) {
			if(TicTacToe.Variable[0] == TicTacToe.Turn[1]) {
				TicTacToe.Turn[3] = TicTacToe.Turn[3] + 1;
			} else {
				TicTacToe.Turn[4] = TicTacToe.Turn[4] + 1;
			}
			document.getElementById("TicTacToe_P1_Score").innerHTML = TicTacToe.Turn[3];
			document.getElementById("TicTacToe_P2_Score").innerHTML = TicTacToe.Turn[4];
		} else if(TicTacToe.Variable[3] == TicTacToe.Variable[4] && TicTacToe.Variable[3] == TicTacToe.Variable[5]) {

		}
	}
};